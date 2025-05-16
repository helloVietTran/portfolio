import FacebookIcon from '../icons/FacebookIcon';
import LinkedinIcon from '../icons/LinkedinIcon';

const Footer = () => {
  return (
    <footer className="c-space border-black-300 flex flex-wrap items-center justify-between gap-5 border-t pt-3 pb-3">
      <span className="text-white-500">Trần Việt Anh</span>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/helloVietTran"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="h-1/2 w-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.facebook.com/anh.tranviet.3386"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <FacebookIcon color="#9CA3AF" width={22} height={22} />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.facebook.com/anh.tranviet.3386"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <LinkedinIcon color="#9CA3AF" width={23.5} height={23.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
