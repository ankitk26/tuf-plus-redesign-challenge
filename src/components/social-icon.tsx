import { Button } from "./ui/button";

export default function SocialLink(props: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <a href={props.link} target="_blank">
      <Button size="icon" variant="outline" className="rounded-full">
        {props.children}
      </Button>
    </a>
  );
}
