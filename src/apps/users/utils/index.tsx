import { INUSER } from "@/apps/auth/utils";

export const toggleSidebar = () => {
  var sidebar = document.getElementById("sideBar") as HTMLElement;
  var sidebarToggler = document.querySelector("a#toogleSidebar i") as Element;

  if (!sidebar.classList.contains("toggled")) {
    sidebarToggler.classList.remove("fa-bars");
    sidebarToggler.classList.add("fa-xmark");
    sidebar.classList.add("toggled");
  } else {
    sidebarToggler.classList.remove("fa-xmark");
    sidebarToggler.classList.add("fa-bars");
    sidebar.classList.remove("toggled");
  }
};

export interface BreadcrumNavIn {
  pagenavTitle: string;
  currentPage: string;
}

export interface TransactionIn {
  id: number;
  // user: INUSER;
  amount: number;
  date: string;

  status: string;
  mode: string;

  ref: string;
}

export interface TxtCardIn {
  transaction: TransactionIn;
}
