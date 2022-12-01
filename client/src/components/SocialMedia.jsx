import React from 'react';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return (
  <div className="app__social">
    <div onClick={() => openInNewTab('https://github.com/KuraoHikari')}>
      <BsGithub />
    </div>
    <div onClick={() => openInNewTab('https://www.facebook.com/thewa.indra.1')}>
      <FaFacebookF />
    </div>
    <div onClick={() => openInNewTab('https://www.instagram.com/kuraohikari')}>
      <BsInstagram />
    </div>
  </div>)
};

export default SocialMedia;
