import React, { ReactNode } from "react";
import Image from "next/image";
import { Box, Typography, Divider, Button, Stack } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const SOCIAL_ICON_SX = (accent: string) => {
  return {
    "& .social-svg-background": {
      stroke: `${accent} !important`,
    },
    "& .social-svg-mask": {
      fill: "transparent !important",
    },
    "& .social-svg-icon": {
      fill: `${accent} !important`,
    },
  };
};

type LandingProps = {
  title: string;
  name: string;
  subtitle: string;
  socialUrls?: string[];
  backgroundImage?: string;
  backgroundColor?: string;
  accent?: string;
  secondaryAccent?: string;
  headshotSrc: string;
  navigateAway?: ReactNode;
  actionClick: () => void;
  actionText: string;
};

const Landing: React.FC<LandingProps> = ({
  title,
  name,
  subtitle,
  socialUrls,
  headshotSrc,
  backgroundColor = "#E6E1DF",
  accent = "#325D80",
  secondaryAccent = "#5FA052",
  backgroundImage = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20preserveAspectRatio%3D%22none%22%3E%20%3Cstyle%3E%20path%20%7B%20fill%3A%20none%3B%20stroke-width%3A%201.01px%3B%20stroke%3A%20rgba(0,0,0,0.09)%3B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D,20%3C%2Fstyle%3E%20%3Cpath%20d%3D%22M448%2C512c0-128-128-128-128-256S448%2C128%2C448%2C0%22%20%2F%3E%20%3Cpath%20d%3D%22M192%2C512c0-128-128-128-128-256S192%2C128%2C192%2C0%22%20%2F%3E%3C%2Fsvg%3E",
  navigateAway,
  actionClick,
  actionText,
}) => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor,
        backgroundImage: `url('${backgroundImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {navigateAway && navigateAway}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: 10,
          padding: "4rem 0",
        }}
      >
        <Image
          style={{ borderRadius: 8 }}
          src={headshotSrc}
          alt="headshot"
          width={480}
          height={480}
          priority
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignSelf: "stretch",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              color: accent,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.3rem",
              width: "calc(100% + 0.3rem)",
              fontSize: "0.875em",
              lineHeight: "1.875",
              fontWeight: 300,
            }}
          >
            {title}
          </Typography>
          <Divider
            sx={{ width: 50, borderBottomWidth: "medium", mx: "auto" }}
          />
          <Typography
            sx={{
              color: "rgba(0,0,0,0.702)",
              fontFamily: "'Fraunces', serif",
              letterSpacing: "-0.025rem",
              width: "100%",
              fontSize: "3em",
              lineHeight: "1.25",
              fontWeight: 700,
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: "rgba(0,0,0,0.49)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1em",
              lineHeight: 2,
              fontWeight: 300,
            }}
          >
            {subtitle}
          </Typography>
          <Button
            startIcon={<AdsClickIcon />}
            sx={{
              mx: "auto",
              py: 2,
              backgroundColor: accent,
              ":hover": {
                transform: "scale(1.03)",
                backgroundColor: secondaryAccent,
              },
            }}
            size="large"
            variant="contained"
            onClick={actionClick}
          >
            {actionText}
          </Button>
          <Stack
            flexDirection="row"
            sx={SOCIAL_ICON_SX(accent)}
            justifyContent="space-between"
            columnGap={1}
          >
            {socialUrls?.map((url) => (
              <Box
                key={url}
                sx={{
                  ":hover": {
                    transform: "scale(1.06)",
                    ...SOCIAL_ICON_SX(secondaryAccent),
                  },
                }}
              >
                <SocialIcon url={url} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
