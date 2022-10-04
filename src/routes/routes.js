import React from "react";
// notfound page
import NotFound from "../pages/NotFound";
import { AnalystRoutes } from "./AnalystRoutes";
import { ContentSupportRoute } from "./ContentSupportRoute";
// routes component
import { DataCollectorRoutes } from "./DataCollectorRoutes";
import { EducationManagerRoutes } from "./EducationManagerRoutes";
import { ExpertSupport } from "./ExpertSupport";
import { FinanceManagerRoutes } from "./FinanceManagerRoutes";
import { GISRoutes } from "./GISRoutes";
import { MealPlanWriteRoutes } from "./MealPlanWriteRoutes";
import { Qsupport } from "./QsupportRoutes";
import { SaleRoute } from "./SaleRoutes";
import SysAdminRoutes from "./SysAdmin";
import { VisitRequestRoutes } from "./VisitRequestRoutes";

export const MainRoutes = (roleUser) => {
  console.log(roleUser);
  switch (roleUser?.roleUser) {
    case "visitSupport":
      return <VisitRequestRoutes />;
    case "dataCollector":
      return <DataCollectorRoutes />;
    case "financeManager":
      return <FinanceManagerRoutes />;
    case "GIS":
      return <GISRoutes />;
    case "analyst":
      return <AnalystRoutes />;
    case "educationManager":
      return <EducationManagerRoutes />;
    case "Qsupport":
      return <Qsupport />;
    case "mealPlanWriter":
      return <MealPlanWriteRoutes />;
    case "sale":
      return <SaleRoute />;
    case "ExpertSupport":
      return <ExpertSupport />;
    case "contentSupport":
      return <ContentSupportRoute />;
    case "sysAdmin":
      return <SysAdminRoutes />;
    default:
      return <NotFound />;
  }
};
