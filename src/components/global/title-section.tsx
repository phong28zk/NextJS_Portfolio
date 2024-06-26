import React from "react";

type TitleSectionProps = {
  title: string;
  subheading?: string;
  pill: string;
};

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill,
}) => {
  return (
    <React.Fragment>
      <section className="flex flex-col gap-4 justify-center items-start md:items-center">
        <article
          className="
          rounded-full p-[1px] 
          text-sm 
          dark:bg-gradient-to-r
          dark:from-brand-primaryBlue
          dark:to-brand-primaryPurple
          "
        >
          <div className="px-3 py-1 rounded-full dark:bg-black border-b-indigo-700">
            {pill}
          </div>
        </article>
        {subheading ? (
          <>
            <h1 className="text-left text-3xl sm:text-5xl sm:max-w-[750px] md:text-center font-semibold">
              {title}
            </h1>
            <p className="dark:text-washed-purple-700 sm:max-w-[450px] md:text-center">
              {subheading}
            </p>
          </>
        ) : (
          <h1 className="text-left text-4xl sm:text-6xl sm:max-w-[850px] md:text-center font-semibold">
            {title}
          </h1>
        )}
      </section>
    </React.Fragment>
  );
};

export default TitleSection;
