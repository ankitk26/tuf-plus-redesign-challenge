import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SocialLink from "./social-icon";

export default function AboutCreator() {
  return (
    <div className="space-y-6">
      <div className="relative group overflow-hidden rounded-xl">
        <img
          src="https://cdn.interviewready.io/sd-course-thumbnail.webp"
          className="aspect-video w-full"
          alt="System Design Course"
        />
      </div>

      <div className="flex items-start gap-4">
        <Avatar className="size-14 ring-2 ring-primary/10">
          <AvatarImage src="https://cdn.interviewready.io/gkcs-1.webp" />
          <AvatarFallback className="text-lg font-semibold">GS</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-semibold">Gaurav Sen</h3>
          <div className="space-y-1">
            <p className="text-sm font-medium text-primary">
              Founder @Interview Ready
            </p>
            <p className="text-sm text-muted-foreground">
              Ex Software Engineer @ Uber, Directi
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <SocialLink link="https://www.linkedin.com/in/gaurav-sen-56b6a941/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlBase="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 24 24"
                className="size-4 fill-current"
              >
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
              </svg>
            </SocialLink>

            <SocialLink link="https://twitter.com/InterviewReady3">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 fill-current"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </SocialLink>

            <SocialLink link="https://www.youtube.com/@gkcs">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 fill-current"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </div>
  );
}
