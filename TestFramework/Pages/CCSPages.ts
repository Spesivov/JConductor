import { Page } from "playwright";
import { LoginPage } from "./LoginPage";
import { ChooseSitePage } from "./ChooseSitePage";
import { StudyDetailsPage } from "./CCS/Study/StudyDetailsPage";
import { StudyListPage } from "./CCS/Study/StudyListPage";
import { ViewStudyPage } from "./CCS/Study/ViewStudyPage";
import { VisitsForStudyPage } from "./CCS/Study/VisitsForStudyPage";
import { HeaderPanel } from "./HeaderPanel";

export class CCSPages {
  constructor(public page: Page) { }
  public login: LoginPage = new LoginPage(this.page);
  public chooseLocation: ChooseSitePage = new ChooseSitePage(this.page);
  public studyDetailsPage: StudyDetailsPage = new StudyDetailsPage(this.page);
  public studyListPage: StudyListPage = new StudyListPage(this.page);
  public viewStudyPage: ViewStudyPage = new ViewStudyPage(this.page);
  public visitsForStudyPage: VisitsForStudyPage = new VisitsForStudyPage(this.page);
  public headerPanel = new HeaderPanel(this.page);
}