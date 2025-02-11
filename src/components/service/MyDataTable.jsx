import { useState, useRef, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaEye, FaCopy, FaChevronDown } from "react-icons/fa";

const data = [
  { id: 1, url: "http://103.233.103.22:8090/geoserver/dilans/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dilans%3Atoponimi_kesehatan_8467383&maxFeatures=50&outputFormat=application%2Fjson", keterangan: "Dilans Toponomi Kesehatan" },
  { id: 2, url: "https://example.com/arianto", keterangan: "Arianto Profile" },
  { id: 3, url: "https://example.com/gilang", keterangan: "Gilang Profile" },
  { id: 4, url: "https://example.com/putra", keterangan: "Putra Profile" },
  { id: 5, url: "https://example.com/fajar", keterangan: "Fajar Profile" },
];

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const copyToClipboard = async (url) => {
  try {
    await navigator.clipboard.writeText(url);
    alert("Link berhasil disalin!");
  } catch (err) {
    alert("Gagal menyalin link: " + err);
  }
};

const ActionDropdown = ({ row }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Menutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleView = () => {
    openInNewTab(row.url);
    setOpen(false);
  };

  const handleCopy = () => {
    copyToClipboard(row.url);
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 flex items-center gap-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Pilih Aksi <FaChevronDown />
      </button>

      {open && (
        <div className="absolute left-0 mt-1 w-32 bg-white border shadow-lg rounded-md z-10">
          <button
            className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100"
            onClick={handleView}
          >
            <FaEye /> View
          </button>
          <button
            className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100"
            onClick={handleCopy}
          >
            <FaCopy /> Copy Link
          </button>
        </div>
      )}
    </div>
  );
};

const MyDataTable = () => {
  const [filterText, setFilterText] = useState("");

  const filteredData = data.filter((row) =>
    row.keterangan.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true, wrap: true },
    {
      name: "URL",
      selector: (row) => row.url,
      sortable: true,
      wrap: true,
      cell: (row) => (
        <span title={row.url}>
          {row.url.length > 50 ? row.url.substring(0, 50) + "..." : row.url}
        </span>
      ),
    },
    { name: "Keterangan", selector: (row) => row.keterangan, sortable: true, wrap: true },
    {
      name: "Aksi",
      cell: (row) => <ActionDropdown row={row} />,
      ignoreRowClick: true,
      allowOverflow: true,
      wrap: true,
    },
  ];

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white text-black">
      {/* <h2 className="text-lg font-semibold mb-2">Daftar URL</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari URL..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-1/4 p-2 border rounded bg-white text-black"
        />
      </div> */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default MyDataTable;
