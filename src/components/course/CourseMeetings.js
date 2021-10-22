import {
  Dialog,
  DialogContent as MuiDialogContent,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import _ from "lodash";

import {
  formatCapacity,
  formatDeliveryMode,
  formatInstructors,
  formatPriorityGroup,
  formatSessionInfo,
  getPriorityCodeDescription,
} from "../../utilities/courseFormatter";

const MeetingListing = ({
  meeting,
  onClick,
  timetableControl,
  session,
  section,
  code,
}) => {
  const {
    schedule,
    instructors,

    teachingMethod, // LEC, TUT, PRA
    sectionNumber,

    enrollmentCapacity,
    actualEnrolment,
    actualWaitlist,
    waitlist, // Y, N

    deliveryMode, // CLASS, ONLSYNC, ONLASYNC

    enrollmentIndicator, // P, E, AE, PE, R1, R2
    enrollmentControls,

    cancel,
  } = meeting;
  const [timetable, updateTimetable] = timetableControl;

  const ListItemSecondary = () => {
    const theme = useTheme();
    const fontVariant = useMediaQuery(theme.breakpoints.down("sm"))
      ? "caption"
      : "body2";

    if (cancel) {
      return <Typography variant={fontVariant}>Cancelled</Typography>;
    }

    const full = false;
    const Instructors = (instructors) => {
      if (useMediaQuery(theme.breakpoints.down("sm"))) {
        return null;
      }

      return (
        <Typography variant={fontVariant} display={{ xs: "none", sm: "block" }}>
          {formatInstructors(instructors)}
        </Typography>
      );
    };

    const EnrollmentIndicator = (enrollmentIndicator) => {
      if (useMediaQuery(theme.breakpoints.down("sm")) || !enrollmentIndicator) {
        return null;
      }

      return (
        <Typography variant={fontVariant}>{enrollmentIndicator}</Typography>
      );
    };

    return (
      <Stack
        spacing={1}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography variant={fontVariant}>
          {formatCapacity(
            enrollmentCapacity,
            actualEnrolment,
            actualWaitlist,
            waitlist,
            full
          )}
        </Typography>

        <Typography variant={fontVariant}>
          {formatDeliveryMode(deliveryMode, full)}
        </Typography>

        {Instructors(instructors)}

        {Object.entries(schedule).map(([k, v]) => {
          if (k === "-") return null;
          return (
            <Typography variant={fontVariant} key={k}>
              {formatSessionInfo(v, full)}
            </Typography>
          );
        })}

        {EnrollmentIndicator(enrollmentIndicator)}
      </Stack>
    );
  };

  const lectureSection = `${teachingMethod + sectionNumber}`;

  const getDataForDialog = () => {
    const full = true;
    return {
      section: lectureSection,
      instructors: formatInstructors(instructors),
      meetings: Object.entries(schedule)
        .filter(([k]) => k !== "-")
        .map(([, v]) => formatSessionInfo(v, full)),
      delivery: formatDeliveryMode(deliveryMode, full),
      priority: getPriorityCodeDescription(enrollmentIndicator),
      capacity: formatCapacity(
        enrollmentCapacity,
        actualEnrolment,
        actualWaitlist,
        waitlist,
        full
      ),
      priorityGroups: enrollmentControls.map((entry) =>
        formatPriorityGroup(entry)
      ),
    };
  };

  const onItemClick = () => {
    onClick(getDataForDialog());
  };

  section = section.toUpperCase();
  code = code.toUpperCase();

  const isEntryInTimetable = () => {
    if (
      !Object.keys(timetable).includes(session) ||
      !Object.keys(timetable[session]).includes(`${code}${section}`) ||
      !Object.keys(timetable[session][`${code}${section}`]).includes(
        teachingMethod
      )
    ) {
      return false;
    }
    return (
      timetable[session][`${code}${section}`][teachingMethod][
        "sectionNumber"
      ] === sectionNumber
    );
  };

  return (
    <ListItem disableGutters>
      <ListItemButton onClick={onItemClick}>
        <Stack>
          <ListItemText primary={lectureSection} />
          <ListItemSecondary />
        </Stack>
      </ListItemButton>
      <ListItemSecondaryAction>
        {isEntryInTimetable() ? (
          <IconButton disabled>
            <EventAvailableIcon />
          </IconButton>
        ) : (
          <Tooltip title="Add to timetable" placement="left">
            <IconButton
              onClick={() =>
                updateTimetable("add", { session, code, section, meeting })
              }
            >
              <EventAvailableIcon />
            </IconButton>
          </Tooltip>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const MeetingListings = ({
  data,
  onListEntryClick,
  timetableControl,
  section,
  session,
  code,
}) => (
  <List dense>
    {Object.entries(data).map(([k, v]) => {
      return (
        <MeetingListing
          meeting={v}
          onClick={onListEntryClick}
          key={k}
          timetableControl={timetableControl}
          section={section}
          session={session}
          code={code}
        />
      );
    })}
  </List>
);

const DialogContent = ({ data }) => {
  const {
    instructors,
    meetings,
    delivery,
    priority,
    capacity,
    priorityGroups,
  } = data;
  const [showGroups, setShowGroups] = useState(false);

  return (
    <MuiDialogContent>
      <Stack spacing={2} divider={<Divider />}>
        <Typography variant="body1">{`Instructors: ${instructors}`}</Typography>
        <Typography variant="body1">{`Delivery mode: ${delivery}`}</Typography>
        <Typography variant="body1">{capacity}</Typography>
        <Stack>
          <Typography variant="body1" paragraph>
            Meetings:
          </Typography>
          {meetings.map((entry) => (
            <Typography variant="body2" key={entry}>
              {entry}
            </Typography>
          ))}
        </Stack>
        {priority ? (
          <Stack>
            <Typography variant="body1" paragraph>
              Enrollment priority:
            </Typography>
            <Typography variant="body2">{priority}</Typography>
          </Stack>
        ) : null}
        {!_.isEmpty(priorityGroups) ? (
          <Stack>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              paddingBottom={1}
            >
              <Typography variant="body1">Priority student groups:</Typography>
              <IconButton onClick={() => setShowGroups(!showGroups)}>
                <KeyboardArrowDownIcon
                  sx={{
                    transform: showGroups ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </IconButton>
            </Stack>

            <Stack sx={{ display: showGroups ? "block" : "none" }}>
              {priorityGroups.map((entry, index) => (
                <Typography variant="body2" key={index}>
                  {entry}
                </Typography>
              ))}
            </Stack>
          </Stack>
        ) : null}
      </Stack>
    </MuiDialogContent>
  );
};

const CourseMeetings = ({ data, timetableControl, section, session, code }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({
    section: "",
    instructors: "",
    meetings: [],
    delivery: "",
    priority: "",
    capacity: "",
    priorityGroups: [],
  });

  if (!data) {
    return null;
  }

  const entryClick = (data) => {
    setDialogOpen(true);
    setDialogData(data);
  };

  return (
    <Stack>
      <Typography variant="h5" paragraph>
        Meeting sections
      </Typography>
      <MeetingListings
        data={data}
        onListEntryClick={entryClick}
        timetableControl={timetableControl}
        section={section}
        session={session}
        code={code}
      />
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{dialogData.section}</DialogTitle>
        <DialogContent data={dialogData} />
      </Dialog>
    </Stack>
  );
};

export { CourseMeetings };