const kategoriPermintaan = [
  {
    content: "Surat Keterangan",
    path: "/dashboard/request/suratketerangan",
    color: "button-yellow",
  },
  {
    content: "Surat Pengajuan",
    path: "/dashboard/request/suratpengajuan",
    color: "button-green",
  },
  {
    content: "Surat Penugasan",
    path: "/dashboard/request/suratpenugasan",
    color: "button-blue",
  },
  {
    content: "Transkrip Nilai",
    path: "/dashboard/request/transkripnilai",
    color: "button-orange",
  },
  {
    content: "Permohonan Yudisium",
    path: "/dashboard/request/yudisium",
    color: "button-gray",
  },
  {
    content: "Pengajuan Sempro",
    path: "/dashboard/request/pengajuansempro",
    color: "button-red",
  },
  {
    content: "Pengajuan Seminar Kp",
    path: "/dashboard/request/seminarkp",
    color: "button-teal",
  },
  {
    content: "Pengajuan Sidang Skripsi",
    path: "/dashboard/request/skripsi",
    color: "button-violet",
  },
];

const kategoriKeterangan = [
  {
    content: "Keterangan Mahasiswa Aktif",
    path: "/dashboard/request/suratketerangan/mahasiswaaktif",
    color: "button-green",
  },
  {
    content: "Keterangan Lulus",
    path: "/dashboard/request/suratketerangan/keteranganlulus",
    color: "button-blue",
  },
  {
    content: "Pengunduran Diri",
    path: "/dashboard/request/suratketerangan/pengundurandiri",
    color: "button-red",
  },
];

const kategoriPengajuan = [
  {
    content: "Judul Kerja Praktik",
    path: "/dashboard/request/suratpengajuan/kerjapraktik",
    color: "button-green",
  },
  {
    content: "Judul Skripsi",
    path: "/dashboard/request/suratpengajuan/judulskripsi",
    color: "button-yellow",
  },
  {
    content: "Pengantar Kerja Praktik",
    path: "/dashboard/request/suratpengajuan/pengantartkerjapraktik",
    color: "button-blue",
  },
];

const kategoriPenugasan = [
  {
    content: "Penugasan Dosen Pembimbing Kerja Praktik",
    path: "/dashboard/request/suratpenugasan/dosenkerjapraktik",
    color: "button-green",
  },
  {
    content: "Penugasan Dosen Pembimbing Tugas Akhir/skripsi",
    path: "/dashboard/request/suratpenugasan/dosentugasakhir",
    color: "button-blue",
  },
];

const objectDataDummy = () => {
  return {
    keterangan: [
      {
        id: "keterangan-1",
        jenis: "keterangan mahasiswa aktif",
        status: "menunggu",
        tanggal: "2025-01-04",
      },
      {
        id: "keterangan-2",
        jenis: "Keterangan lulus",
        status: "success",
        tanggal: "2025-03-01",
      },
    ],
    pengajuan: [
      {
        id: "pengajuan-1",
        jenis: "Judul Kerja Praktik",
        status: "success",
        tanggal: "2025-08-04",
      },
    ],
    penugasan: [
      {
        id: "penugasan-2",
        jenis: "Penugasan Dosen Pembimbing Kerja Praktik",
        status: "reject",
        tanggal: "2025-08-02",
      },
      {
        id: 'penugasan-3',
        jenis: 'Penugasan Dosen Pembimbing Kerja Praktik',
        status: 'success',
        tanggal: '2025-08-02'
      }
    ],
    transkripNilai: [
      {
        id: 'transkrip-1',
        status: 'reject',
        tanggal: '2025-10-02'
      }
    ]
  };
};

const data = objectDataDummy();
const allData = Object.values(data).flat();

// const statusCount =  allData.reduce((acc, item) => {
//     acc[item.jenis] = (acc[item.jenis] || 0) + 1;
//     return acc;
//   }, {});

// console.log(statusCount)

const monthCount = allData.reduce((acc, item) => {
    const month = new Date(item.tanggal).toLocaleString("default", {
      month: "short",
    });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});
console.log(monthCount)


export {
  kategoriPermintaan,
  kategoriKeterangan,
  kategoriPengajuan,
  kategoriPenugasan,
  objectDataDummy
};
