
const Header = () => {
  return (
    <>
    <div className="h-18  p-5 shadow-2xl bg-amber-50 text-2xl font-semibold flex justify-between">
     <div>
       <h1>Dashboard</h1>
     </div>
     <div>
      <button type="submit" className="bg-blue-700 h-10 w-25 text-white p-1 text-center font-normal border-0 rounded-lg">Profile</button>
     </div>
    </div>
    </>
  )
}

export default Header