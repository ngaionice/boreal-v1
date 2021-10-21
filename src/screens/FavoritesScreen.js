import {
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { Link as RouterLink } from "react-router-dom";

const Title = () => {
  return <Typography variant="h4">Bookmarked Courses</Typography>;
};

const FavoritesList = ({ favoritesControl }) => {
  const [favorites, updateFavorite] = favoritesControl;

  if (Object.keys(favorites).length < 1) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography variant="body2">
          You don't have any bookmarked courses yet. To bookmark a course, click
          the add bookmark button on the top-right corner when you're at a
          course page.
        </Typography>
      </Box>
    );
  }

  const ListEntry = ({ entry }) => {
    const { courseTitle, code, section, session } = entry;
    return (
      <ListItem disableGutters>
        <ListItemButton
          component={RouterLink}
          to={`/course/${session}/${section.toLowerCase()}/${code.toLowerCase()}`}
        >
          <ListItemText
            primary={`${courseTitle}`}
            secondary={`${code}${section}`}
          />
        </ListItemButton>
        <ListItemSecondaryAction>
          <IconButton
            onClick={() =>
              updateFavorite("remove", `${code}-${section}-${session}`)
            }
          >
            <ClearIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  };

  return (
    <List dense>
      {Object.entries(favorites)
        .sort((a, b) => (a < b ? -1 : 1))
        .map(([k, v]) => (
          <ListEntry entry={v} key={k} />
        ))}
    </List>
  );
};

const FavoritesScreen = ({ favoritesControl }) => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={3} divider={<Divider />}>
        <Title />
        <FavoritesList favoritesControl={favoritesControl} />
      </Stack>
    </Container>
  );
};

export { FavoritesScreen };
