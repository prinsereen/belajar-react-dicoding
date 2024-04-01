// Header component
export const Header = () => {
    return (
      <div className="flex justify-between items-center mx-40 mt-8">
        <h1 className="text-bold text-slate-600 text-6xl ml-">Notes</h1>
        <input className="ml-4 py-2 px-6 border border-slate-600 rounded-md text-4xl focus:outline-none focus:border-indigo-500" type="text" id="searchInput" placeholder="Cari Catatan..."></input>
      </div>
    );
  }