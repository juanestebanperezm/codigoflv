import React from "react";

import Certificado from "../components/Certification/Certificado";
import Compite from "../components/Contests/Compite";
import Cuenta from "../components/Account/Cuenta";
import Preparate from "../components/preparate/Preparate";
import Registro from "../components/Register/Registro";
import RegistroEmpresas from "../components/EnterpriseRegister/RegistroEmpresas";
import Reto from "../components/preparate/Reto";
import NotFound from "../components/NotFound"

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    component: () => <Preparate />
  },
  {
    path: "/preparate",
    key: "PREPARATE",
    component: () => <Preparate />
  },
  {
    path: "/certificate",
    key: "CERTIFICATE",
    component: () => <Certificado />
  },
  {
    path: "/compite",
    key: "COMPITE",
    component: () => <Compite />
  },
  {
    path: "/reto/:id",
    key: "RETO",
    component: () => <Reto />
  },
  {
    path: "/cuenta",
    key: "CUENTA",
    component: () => <Cuenta />
  },
  {
    path: "/registro",
    key: "REGISTRO",
    component: () => <Registro />
  },
  {
    path: "/registroempresa",
    key: "REGISTRO_EMPRESA",
    component: () => <RegistroEmpresas />
  },
  {
    path: "*",
    key: "NOT_FOUND",
    component: () => <NotFound />
  }
];

export default ROUTES;
