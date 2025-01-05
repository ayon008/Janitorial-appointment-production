import React from 'react';
import Image from 'next/image';
import { urlFor } from "@/lib/sanity"; // Assuming you're using this helper for Sanity image URLs


const CustomComponents = {
    types: {
        block: ({ children }) => <p className="mb-5 leading-relaxed text-gray-800">{children}</p>,

        // Handle image groups with different layouts (Grid or Block)
        imageGroup: ({ value }) => {
            const { images, layout } = value;

            if (!images || images.length === 0) return null;

            const imageUrls = images.map(image => urlFor(image.asset).url());

            return (
                <div
                    className={`my-8 ${layout === 'grid' ? 'grid grid-cols-2 gap-4' : 'block'
                        }`}
                >
                    {imageUrls.map((imageUrl, idx) => (
                        <div key={idx} className="w-full h-auto">
                            <Image
                                src={imageUrl}
                                alt={`Content Image ${idx + 1}`}
                                width={950}
                                height={665}
                                className={`rounded-lg shadow-lg ${layout === 'grid' ? 'w-full' : 'mb-4'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            );
        },
    },
};

export default CustomComponents;
