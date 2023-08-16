import GitHub from "./assets/github.svg";
import Google from "./assets/google.svg";
import Linkedin from "./assets/linkedin.svg";
import Wordpress from "./assets/wordpress.svg";

import AWS from "./assets/aws.svg";
import CSS from "./assets/css.svg";
import Django from "./assets/django.svg";
import Docker from "./assets/docker.svg";
import Git from "./assets/git.svg";
import HTML from "./assets/html.svg";
import JavaScript from "./assets/javascript.svg";
import Linux from "./assets/linux.svg";
import PostgreSQL from "./assets/postgresql.svg";
import Python from "./assets/python.svg";
import React from "./assets/react.svg";
import TailwindCSS from "./assets/tailwindcss.svg";
import Terraform from "./assets/terraform.svg";
import CPlusPlus from "./assets/c-plusplus.svg";

function Link({ title, href, icon, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex gap-2 items-center justify-center rounded-md p-2 border-b border-gray-200 hover:border-gray-400 transition ease-linear"
    >
      <img src={icon} alt={alt} className="w-4 h-4" />
      <span className="text-xs">{title}</span>
    </a>
  );
}

function Title({ name }) {
  return <h1 className="text-3xl font-bold">{name}</h1>;
}

function Image({ src, alt }) {
  return (
    <div className="rounded-full bg-gradient-to-r from-purple-300 to-blue-500 shadow-md p-0.5">
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 rounded-full grayscale border-2 border-white"
      />
    </div>
  );
}

function Icon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      title={alt}
      className="w-8 h-8 grayscale hover:grayscale-0 transition ease-linear"
    />
  );
}

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-7 font-['Open_Sans']">
      <Image src="./profile.jpg" alt="Meir Elbaz" />
      <Title name="Meir Elbaz" />
      <p className="text-gray-500 text-center font-light">
        <ul>
          <li>I am a software developer.</li>
          <li>I like to learn new things.</li>
          <li>I try to share everything I learn with others.</li>
        </ul>
      </p>
      <div className="flex gap-2">
        <Link
          title="Linkedin"
          href="http://localhost:5173/www.linkedin.com/in/meir-elbaz-967081128"
          alt="Linkedin"
          icon={Linkedin}
        />
        <Link
          title="GitHub"
          href="https://github.com/meirdev"
          alt="Github"
          icon={GitHub}
        />
        <Link
          title="Blog"
          href="https://meirdev.wordpress.com/"
          alt="Wordpress"
          icon={Wordpress}
        />
        <Link
          title="Mail"
          href="mailto:maornet@gmail.com"
          alt="Mail"
          icon={Google}
        />
      </div>
      <div className="grid grid-cols-7 gap-3">
        <Icon src={AWS} alt="AWS" />
        <Icon src={Terraform} alt="Terraform" />
        <Icon src={Linux} alt="Linux" />
        <Icon src={Docker} alt="Docker" />
        <Icon src={Git} alt="Git" />
        <Icon src={Python} alt="Python" />
        <Icon src={Django} alt="Django" />
        <Icon src={PostgreSQL} alt="PostgreSQL" />
        <Icon src={JavaScript} alt="JavaScript" />
        <Icon src={React} alt="React" />
        <Icon src={CSS} alt="CSS" />
        <Icon src={HTML} alt="HTML" />
        <Icon src={TailwindCSS} alt="TailwindCSS" />
        <Icon src={CPlusPlus} alt={"C++"} />
      </div>
    </div>
  );
}

export default Profile;
