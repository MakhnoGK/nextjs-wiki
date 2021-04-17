import React from 'react';
import Image from 'next/image';

const Avatar = () => {
    return (
        <div className="navbarAvatar">
            {/* <img src="/images/sample_avatar.jpg" alt="Username" /> */}
            <Image
                src="/assets/images/sample_avatar.jpg"
                alt="Username"
                width={300}
                height={300}
            />
        </div>
    );
};

export default Avatar;
