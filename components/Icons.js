import { Box, Flex, List } from '@chakra-ui/react';

import {
  AddIcon,
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpDownIcon,
  AtSignIcon,
  AttachmentIcon,
  BellIcon,
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
  DragHandleIcon,
  EditIcon,
  EmailIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  InfoIcon,
  InfoOutlineIcon,
  LinkIcon,
  LockIcon,
  MinusIcon,
  MoonIcon,
  NotAllowedIcon,
  PhoneIcon,
  PlusSquareIcon,
  QuestionIcon,
  QuestionOutlineIcon,
  RepeatIcon,
  RepeatClockIcon,
  SearchIcon,
  Search2Icon,
  SettingsIcon,
  SmallAddIcon,
  SmallCloseIcon,
  SpinnerIcon,
  StarIcon,
  SunIcon,
  TimeIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  UnlockIcon,
  UpDownIcon,
  ViewIcon,
  ViewOffIcon,
  WarningIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons';

const Icon = ({ icon, title }) => (
    <Flex as="li" w="240px" align="center" p={2} m={1} sx={{ 'listStyle': 'none' }}>
      <Flex boxShadow="xl" boxSize="40px" justify="center" color="white" align="center" bg="blue.300" >{icon}</Flex>
      <Box as="span" pl={3}>{`<${title} />`}</Box>
    </Flex>
  );

const Icons = () => (
    <List d="flex" flexWrap="wrap">
      <Icon icon={<AddIcon />} title="AddIcon" />
      <Icon icon={<ArrowBackIcon />} title="ArrowBackIcon" />
      <Icon icon={<ArrowDownIcon />} title="ArrowDownIcon" />
      <Icon icon={<ArrowForwardIcon />} title="ArrowForwardIcon" />
      <Icon icon={<ArrowLeftIcon />} title="ArrowLeftIcon" />
      <Icon icon={<ArrowRightIcon />} title="ArrowRightIcon" />
      <Icon icon={<ArrowUpIcon />} title="ArrowUpIcon" />
      <Icon icon={<ArrowUpDownIcon />} title="ArrowUpDownIcon" />
      <Icon icon={<AtSignIcon />} title="AtSignIcon" />
      <Icon icon={<AttachmentIcon />} title="AttachmentIcon" />
      <Icon icon={<BellIcon />} title="BellIcon" />
      <Icon icon={<CalendarIcon />} title="CalendarIcon" />
      <Icon icon={<ChatIcon />} title="ChatIcon" />
      <Icon icon={<CheckIcon />} title="CheckIcon" />
      <Icon icon={<CheckCircleIcon />} title="CheckCircleIcon" />
      <Icon icon={<ChevronDownIcon />} title="ChevronDownIcon" />
      <Icon icon={<ChevronLeftIcon />} title="ChevronLeftIcon" />
      <Icon icon={<ChevronRightIcon />} title="ChevronRightIcon" />
      <Icon icon={<ChevronUpIcon />} title="ChevronUpIcon" />
      <Icon icon={<CloseIcon />} title="CloseIcon" />
      <Icon icon={<CopyIcon />} title="CopyIcon" />
      <Icon icon={<DeleteIcon />} title="DeleteIcon" />
      <Icon icon={<DownloadIcon />} title="DownloadIcon" />
      <Icon icon={<DragHandleIcon />} title="DragHandleIcon" />
      <Icon icon={<EditIcon />} title="EditIcon" />
      <Icon icon={<EmailIcon />} title="EmailIcon" />
      <Icon icon={<ExternalLinkIcon />} title="ExternalLinkIcon" />
      <Icon icon={<HamburgerIcon />} title="HamburgerIcon" />
      <Icon icon={<InfoIcon />} title="InfoIcon" />
      <Icon icon={<InfoOutlineIcon />} title="InfoOutlineIcon" />
      <Icon icon={<LinkIcon />} title="LinkIcon" />
      <Icon icon={<LockIcon />} title="LockIcon" />
      <Icon icon={<MinusIcon />} title="MinusIcon" />
      <Icon icon={<MoonIcon />} title="MoonIcon" />
      <Icon icon={<NotAllowedIcon />} title="NotAllowedIcon" />
      <Icon icon={<PhoneIcon />} title="PhoneIcon" />
      <Icon icon={<PlusSquareIcon />} title="PlusSquareIcon" />
      <Icon icon={<QuestionIcon />} title="QuestionIcon" />
      <Icon icon={<QuestionOutlineIcon />} title="QuestionOutlineIcon" />
      <Icon icon={<RepeatIcon />} title="RepeatIcon" />
      <Icon icon={<RepeatClockIcon />} title="RepeatClockIcon" />
      <Icon icon={<SearchIcon />} title="SearchIcon" />
      <Icon icon={<Search2Icon />} title="Search2Icon" />
      <Icon icon={<SettingsIcon />} title="SettingsIcon" />
      <Icon icon={<SmallAddIcon />} title="SmallAddIcon" />
      <Icon icon={<SmallCloseIcon />} title="SmallCloseIcon" />
      <Icon icon={<SpinnerIcon />} title="SpinnerIcon" />
      <Icon icon={<StarIcon />} title="StarIcon" />
      <Icon icon={<SunIcon />} title="SunIcon" />
      <Icon icon={<TimeIcon />} title="TimeIcon" />
      <Icon icon={<TriangleDownIcon />} title="TriangleDownIcon" />
      <Icon icon={<TriangleUpIcon />} title="TriangleUpIcon" />
      <Icon icon={<UnlockIcon />} title="UnlockIcon" />
      <Icon icon={<UpDownIcon />} title="UpDownIcon" />
      <Icon icon={<ViewIcon />} title="ViewIcon" />
      <Icon icon={<ViewOffIcon />} title="ViewOffIcon" />
      <Icon icon={<WarningIcon />} title="WarningIcon" />
      <Icon icon={<WarningTwoIcon />} title="WarningTwoIcon" />
    </List>
  );

export default Icons;
