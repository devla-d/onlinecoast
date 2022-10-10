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

export const clossSideBar = () => {
  var sidebar = document.getElementById("sideBar") as HTMLElement;
  var sidebarToggler = document.querySelector("a#toogleSidebar i") as Element;
  sidebarToggler.classList.remove("fa-xmark");
  sidebarToggler.classList.add("fa-bars");
  sidebar.classList.remove("toggled");
};
export interface BreadcrumNavIn {
  pagenavTitle: string;
  currentPage: string;
}

export interface TransactionIn {
  id: number;
  user: INUSER;

  amount: number;

  benneficiary_name: string;

  benneficiary_accnumber: string;

  bic_code: string;

  bank_name: string;

  purpose: string;

  firstname: string;

  lastname: string;

  phone: string;

  email: string;

  city: string;

  country: string;
  mode: string;

  createdAt: Date;

  updatedAt: Date;
}

export interface TxtCardIn {
  transaction: TransactionIn;
}

export interface TransactionRespones {
  transaction: TransactionIn[];
  msg: string;
}
