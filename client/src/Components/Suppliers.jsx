import React from 'react';
import AE from '../assets/32.jpg';
import AU from '../assets/33.jpg';
import US from '../assets/34.jpg';
import RU from '../assets/35.jpg';
import IT from '../assets/36.jpg';
import DK from '../assets/37.jpg';
import FR from '../assets/38.jpg';
import CN from '../assets/39.jpg';
import GB from '../assets/40.jpg';
import IN from '../assets/41.png';

function Suppliers() {
  return (
    <div className="p-2 bg-gray-100 rounded-xl">
      <div className="p-5 bg-gray-100 mx-auto max-w-screen-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-left">Suppliers by region</h1>
        <div className="grid grid-cols-5 gap-6">
          {/* Supplier Items */}
          <div className="flex items-center gap-3">
            <img src={AE} alt="AE" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">Arabic Emirates</p>
              <span className="text-sm text-gray-600">shopname.ae</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={AU} alt="AU" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">Australia</p>
              <span className="text-sm text-gray-600">shopname.au</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={US} alt="US" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">United States</p>
              <span className="text-sm text-gray-600">shopname.ae</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={RU} alt="RU" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">Russia</p>
              <span className="text-sm text-gray-600">shopname.ru</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={IT} alt="IT" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">Italy</p>
              <span className="text-sm text-gray-600">shopname.it</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={DK} alt="DK" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">Denmark</p>
              <span className="text-sm text-gray-600">denmark.com.dk</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={FR} alt="FR" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">France</p>
              <span className="text-sm text-gray-600">shopname.com.fr</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={CN} alt="CN" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">China</p>
              <span className="text-sm text-gray-600">shopname.ae</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={GB} alt="GB" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">Great Britain</p>
              <span className="text-sm text-gray-600">shopname.co.uk</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={IN} alt="IN" className="w-11 h-9 object-cover rounded-md" />
            <div>
              <p className="text-lg font-medium text-gray-900">India</p>
              <span className="text-sm text-gray-600">shopname.ae</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suppliers;
