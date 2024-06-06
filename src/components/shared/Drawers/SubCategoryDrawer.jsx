import { XIcon } from "lucide-react";

const SubCategoryDrawer = ({ isOpen, onClose, children, style, duration = 500 }) => {
    return (
        <div 
            className={`fixed inset-0 z-50 transition-transform transform ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            style={{ ...style, transitionDuration: `${duration}ms` }}
        >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" style={{ transitionDuration: `${duration}ms` }} onClick={onClose}></div>
            <div className="relative bg-white w-96 h-full shadow-xl px-4 pt-14 transition-transform" style={{ transitionDuration: `${duration}ms` }}>
                {children}
                {style?.left === undefined && (
                    <button onClick={onClose} className="absolute top-4 left-4">
                        <XIcon/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SubCategoryDrawer;