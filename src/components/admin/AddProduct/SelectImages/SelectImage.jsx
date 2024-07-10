import {useState} from 'react';

export const SelectImages = ({label, images = null, setImages}) => {
    const [selectedImages, setSelectedImages] = useState(images || []);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setSelectedImages(prevImages => [...(prevImages || []), ...newImages]);
        setImages && setImages(prevImages => [...(prevImages || []), ...newImages]);
    };

    const handleRemoveImage = (index) => {
        setSelectedImages(prevImages => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
        setImages && setImages(prevImages => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
    };

    return (
        <div className={`flex flex-col w-full border-b border-b-admin-grey-hover pb-5`}>
            <div className={`flex items-center`}>
                <p className={`text-body3 font-bold w-1/4`}>{label}</p>
                <div className={`flex items-center gap-4`}>
                    <div><input type="file" multiple onChange={handleImageChange}/></div>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
                {selectedImages.map((image, index) => (
                    <div key={index} className="relative">
                        <img src={image} alt={`Selected ${index}`} className="w-36 h-36 object-cover"/>
                        <button
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
