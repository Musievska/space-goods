import Link from "next/link";

const Pagination = ({ currentPage, totalPages, baseUrl }) => {
  // Helper function to generate page numbers
  const pageNumbers = () => {
    const pages = [];
    for (
      let i = Math.max(currentPage - 2, 1);
      i <= Math.min(currentPage + 2, totalPages);
      i++
    ) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="products-footer">
      <div className="pagination">
        {currentPage > 1 && (
          <Link href={`${baseUrl}?page=${currentPage - 1}`}>
            <span className="previous">Previous</span>
          </Link>
        )}

        {pageNumbers().map((page) => (
          <Link key={page} href={`${baseUrl}?page=${page}`}>
            <span className={currentPage === page ? "active" : ""}>{page}</span>
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link href={`${baseUrl}?page=${currentPage + 1}`}>
            <span className="next">Next</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export { Pagination };

// 'use client';
// import Link from 'next/link';

// const Pagination = ({ currentPage, totalPages, baseUrl }) => {
//   // Helper function to generate page numbers
//   const pageNumbers = () => {
//     const pages = [];
//     for (let i = Math.max(currentPage - 2, 1); i <= Math.min(currentPage + 2, totalPages); i++) {
//       pages.push(i);
//     }
//     return pages;
//   };

//   return (
//     <div className="products-footer">
//       <div className="pagination">
//         {currentPage > 1 && (
//           <Link href={`${baseUrl}?page=${currentPage - 1}`}>
//             <span className="previous">Previous</span>
//           </Link>
//         )}
//         {pageNumbers().map(page => (
//           <Link key={page} href={`${baseUrl}?page=${page}`}>
//             <span className={currentPage === page ? "active" : ""}>{page}</span>
//           </Link>
//         ))}
//         {currentPage < totalPages && (
//           <Link href={`${baseUrl}?page=${currentPage + 1}`}>
//             <span className="next">Next</span>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export { Pagination };

