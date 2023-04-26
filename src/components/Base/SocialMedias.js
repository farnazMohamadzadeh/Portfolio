import React from "react";
import { SocialMedia } from "./SocialMedia";

export const SocialMedias = () => {
  return (
    <div className="flex flex-col items-end justify-end fixed bottom-0 right-0 mb-4 space-y-5 mr-1 z-50">
      <SocialMedia
        url="https://www.linkedin.com/in/farnaz-mohamadzadeh-b23766139/"
        title="LinkedIn"
        src="../images/Linkedin-icon.png"
      />
      <SocialMedia
        url="https://wa.link/iqpxwf"
        title="Whatsapp"
        src="../images/whatsapp-icon.png"
      />
      <SocialMedia
        url="https://t.me/farnaz_zm"
        title="Telegram"
        src="../images/telegram-icon.png"
      />
    </div>
  );
};
