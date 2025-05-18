import {
  Key,
  UserRoundPlus,
  Info,
  NotebookText,
  CirclePlus,
} from "lucide-react";

export const categories = [
  { label: "Money", value: "money" },
  { label: "Todos", value: "todos" },
  { label: "Reminders", value: "reminders" },
  { label: "Work", value: "work" },
];

export const unauthenticatedLinks = [
  {
    to: "/login",
    label: "Login",
    icon: Key,
  },
  {
    to: "/signup",
    label: "Signup",
    icon: UserRoundPlus,
  },
  {
    to: "/about",
    label: "About",
    icon: Info,
  },
];

export const authenticatedLinks = [
  {
    to: "/mynotes",
    label: "My Notes",
    icon: NotebookText,
  },
  {
    to: "/createnote",
    label: "Create Note",
    icon: CirclePlus,
  },
];
