import FilterDropdown from '../../components/filters';

function Header() {
  return (
    <header className='border-b-2 border-gray-600 mb-4 flex'>
      <h1 className='font-bold text-xl mb-2'>Dashboards</h1>
      <div className='ml-auto'>
        <FilterDropdown />
      </div>
    </header>
  );
}

export default Header;
