import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography>{t("app_name")}</Typography>
    </Box>
  );
};

export default DashboardPage;
