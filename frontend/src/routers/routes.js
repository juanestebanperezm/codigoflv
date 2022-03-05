import React from "react";

import Certificado from "../components/Certificado";
import Compite from "../components/Compite";
import Cuenta from "../components/Cuenta";
import Preparate from "../components/preparate/Preparate";
import Registro from "../components/Registro";
import RegistroEmpresas from "../components/RegistroEmpresas";
import Reto from "../components/Reto";
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
