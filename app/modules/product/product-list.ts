import { Button } from "../../../app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../../app/components/ui/card";
import { StarIcon } from "lucide-react";

export function Book({
  title,
  isFiction,
}: {
  title: string;
  isFiction?: boolean;
}) {
  const category = isFiction ? "Fiction" : "Non-Fiction";
}
