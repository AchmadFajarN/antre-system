import { createBrowserRouter } from "react-router";
// Homepage
import App from "../App";

// Auth
import Login from "../components/Auth/Login";


// Dashboard
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../components/Dashboard/DashboardHome";
import DashboardRequest from "../components/Dashboard/DashboardRequest";
import DashboardUser from "../components/Dashboard/DashboardUser";

// Request
import Request from "../components/Request/Request";
import SuratKeterangan from "../components/Request/SuratKeterangan";
import SuratPengajuan from "../components/Request/SuratPengajuan";
import SuratPenjugasan from "../components/Request/SuratPenjugasan";
import SuratSempro from "../components/Request/SuratSempro";
import Skripsi from "../components/Request/Skripsi";
import TranskripNilai from "../components/Request/TranskripNilai";
import Yudisium from "../components/Request/Yudisium";
import SeminarKp from "../components/Request/SeminarKp";

// Surat Keterangan
import ListKeterangan from "../components/suratKeterangan/ListKeterangan";
import KeteranganLulus from "../components/suratKeterangan/KeteranganLulus";
import MahasiswaAktif from "../components/suratKeterangan/MahasiswaAktif";
import PengunduranDiri from "../components/suratKeterangan/PengunduranDiri";

// Surat Pengajuan
import ListPengajuan from "../components/suratPengajuan/ListPengajuan";
import JudulSkripsi from "../components/suratPengajuan/JudulSkripsi";
import KerjaPraktik from "../components/suratPengajuan/KerjaPraktik";
import PengantarKerjaPraktik from "../components/suratPengajuan/PengantarKerjaPraktik";

// Penugasan
import ListPenugasan from "../components/Penugasan/ListPenugasan";
import DosenKerjaPraktik from "../components/Penugasan/DosenKerjaPraktik";
import DosenSkripsi from "../components/Penugasan/DosenSkripsi";


const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Login,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: 'user',
        Component: DashboardUser
      },
      {
        path: 'request',
        Component: DashboardRequest,
        children: [
          {
            index: true,
            Component: Request
          }, 
          {
            path: 'suratketerangan',
            Component: SuratKeterangan,
            children: [
              {
                index: true,
                Component: ListKeterangan
              },
              {
                path: 'mahasiswaaktif',
                Component: MahasiswaAktif
              },
              {
                path: 'keteranganlulus',
                Component: KeteranganLulus
              },
              {
                path: 'pengundurandiri',
                Component: PengunduranDiri
              }     
            ]
          },
          {
            path: 'suratpengajuan',
            Component: SuratPengajuan,
            children: [
              {
                index: true,
                Component: ListPengajuan
              },
              {
                path: 'kerjapraktik',
                Component: KerjaPraktik
              },
              {
                path: 'judulskripsi',
                Component: JudulSkripsi
              },
              {
                path: 'pengantarkerjapraktik',
                Component: PengantarKerjaPraktik
              }
            ]
          },
          {
            path: 'suratpenugasan',
            Component: SuratPenjugasan,
            children: [
              {
                index: true,
                Component: ListPenugasan
              },
              {
                path: 'dosenkerjapraktik',
                Component: DosenKerjaPraktik
              },
              {
                path: 'dosentugasakhir',
                Component: DosenSkripsi
              }
            ]
          },
          {
            path: 'transkripnilai',
            Component: TranskripNilai
          },
          {
            path: 'yudisium',
            Component: Yudisium
          },
          {
            path: 'pengajuansempro',
            Component: SuratSempro
          },
          {
            path: 'seminarkp',
            Component: SeminarKp
          },
          {
            path: 'skripsi',
            Component: Skripsi
          }  
        ]
      }
    ],
  },
]);

export default Router;
