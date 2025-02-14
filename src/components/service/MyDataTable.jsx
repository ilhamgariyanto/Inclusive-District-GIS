import { useState, useRef, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaEye, FaCopy, FaChevronDown } from "react-icons/fa";
import { createPortal } from "react-dom";

const data = [
  {
    id: 1,
    url: "http://103.233.103.22:8090/geoserver/dilans/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dilans%3Atoponimi_kesehatan_8467383&maxFeatures=50&outputFormat=application%2Fjson",
    keterangan: "Dilans Toponomi Kesehatan",
  },
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
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

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

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX,
      });
    }
  }, [open]);

  const handleView = () => {
    openInNewTab(row.url);
    setOpen(false);
  };

  const handleCopy = () => {
    copyToClipboard(row.url);
    setOpen(false);
  };

  return (
    <>
      <button
        ref={buttonRef}
        className="px-3 py-1 rounded bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition duration-300 flex items-center gap-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Pilih Aksi <FaChevronDown />
      </button>

      {open &&
        createPortal(
          <div
            ref={dropdownRef}
            className="absolute w-40 bg-white border shadow-lg rounded-md z-50 transform transition-transform duration-300 origin-top-left scale-100"
            style={{ top: position.top, left: position.left }}
          >
            <button
              className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-[var(--color-primary-hover)] transition-colors duration-300"
              onClick={handleView}
            >
              <FaEye className="text-[var(--color-primary)]" /> View
            </button>
            <button
              className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-[var(--color-primary-hover)] transition-colors duration-300"
              onClick={handleCopy}
            >
              <FaCopy className="text-[var(--color-primary)]" /> Copy Link
            </button>
          </div>,
          document.body // Gunakan portal agar dropdown muncul di luar tabel
        )}
    </>
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
    {
      name: "Keterangan",
      selector: (row) => row.keterangan,
      sortable: true,
      wrap: true,
    },
    {
      name: "Aksi",
      cell: (row) => <ActionDropdown row={row} />,
      ignoreRowClick: true,
      allowOverflow: true,
      wrap: true,
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">
        Daftar URL
      </h2>
      <div className="mb-4">
        {/* <input
          type="text"
          placeholder="Cari URL..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-1/4 p-2 border rounded bg-white text-[var(--color-text)]"
        /> */}
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        customStyles={{
          rows: {
            style: {
              borderBottom: "1px solid #E5E5E5",
              "&:hover": {
                backgroundColor: "var(--color-primary-hover)",
              },
            },
          },
          headCells: {
            style: {
              fontWeight: "bold",
              color: "var(--color-text)",
              backgroundColor: "#F8F8F8",
              borderBottom: "1px solid #E5E5E5",
            },
          },
          cells: {
            style: {
              color: "var(--color-text)",
            },
          },
        }}
      />
    </div>
  );
};

export default MyDataTable;
