import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

interface Tag {
  id: number;
  name: string;
  path: string;
}

interface ProjectProps {
  title: string;
  description: string;
  subDescription: string[]; 
  href: string;
  image: string;
  tags: Tag[];
  setPreview: (image: string | null) => void; 
}

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}: ProjectProps) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="w-full sm:w-auto">
          <p className="text-2xl">{title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sand">
            {tags.map((tag) => (
              <span key={tag.id} className="text-sm sm:text-base whitespace-nowrap">{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation shrink-0"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;