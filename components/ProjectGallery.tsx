// for use in ProjectCard to display images for a project
"use client";

import { useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">

      {/* MAIN IMAGE */}
      <div className="aspect-video border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900">
        <img
          src={selectedImage}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* THUMBNAILS (scrollable like Steam) */}
      <div className="flex gap-2 overflow-x-auto pb-2">

        {images.map((img) => (
          <button
            key={img}
            onClick={() => setSelectedImage(img)}
            className={`flex-shrink-0 w-24 aspect-video border rounded overflow-hidden transition
              ${
                selectedImage === img
                  ? "border-white"
                  : "border-zinc-800 hover:border-zinc-600"
              }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-contain"
            />
          </button>
        ))}

      </div>
    </div>
  );
}