import { Typography } from "@mui/material";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography sx={{ fontSize: "16px" }}>
          Created with ❤️ by L Rakesh Singh
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
