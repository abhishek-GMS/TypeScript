// Interface example
interface User {
  id: number;
  name: string;
}

// Type example for a union
type Status = "active" | "inactive" | "pending";

// Extending an interface
interface Admin extends User {
  role: string;
}

// Intersecting types
type Employee = User & { salary: number };