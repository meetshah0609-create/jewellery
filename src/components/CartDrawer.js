// import React, { useState } from 'react';
// import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react';
// import { formatINR } from '../data/jewelleryData';

// export default function CartDrawer({
//   isOpen,
//   onClose,
//   cart,
//   onUpdateQty,
//   onRemove,
//   onClearCart
// }) {
//   const [customerName, setCustomerName] = useState('');
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   if (!isOpen) return null;

//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
//   const gst = Math.round(subtotal * 0.03); // 3% standard jewellery GST
//   const grandTotal = subtotal + gst;

//   const handleCheckout = (e) => {
//     e.preventDefault();
//     setOrderPlaced(true);
//     setTimeout(() => {
//       onClearCart();
//       setOrderPlaced(false);
//       setCustomerName('');
//       onClose();
//     }, 2400);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
//       <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between">
//         {/* Drawer Header */}
//         <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <ShoppingBag className="w-5 h-5 text-amber-800" />
//             <h2 className="font-serif text-xl text-stone-900">Your Jewellery Bag</h2>
//           </div>
//           <button
//             onClick={onClose}
//             aria-label="Close shopping bag"
//             className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Drawer Body */}
//         <div className="flex-1 overflow-y-auto p-6">
//           {orderPlaced ? (
//             <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
//               <CheckCircle2 className="w-14 h-14 text-emerald-600" />
//               <h3 className="font-serif text-2xl text-stone-900">Order Confirmed</h3>
//               <p className="text-sm text-stone-600 max-w-xs">
//                 Thank you{customerName ? `, ${customerName}` : ''}. Our jewellery concierge will share insured dispatch details shortly.
//               </p>
//             </div>
//           ) : cart.length === 0 ? (
//             <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 py-12">
//               <ShoppingBag className="w-12 h-12 text-stone-300 mb-3" />
//               <p className="font-serif text-lg text-stone-800">Your bag is empty</p>
//               <p className="text-xs mt-1">Explore our hallmarked gold and diamond pieces to begin.</p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-3.5 p-3 rounded-xl border border-stone-200 bg-stone-50/50"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-20 rounded-lg object-cover shrink-0"
//                   />
//                   <div className="flex-1 min-w-0">
//                     <h4 className="font-serif text-sm font-medium text-stone-900 truncate">
//                       {item.name}
//                     </h4>
//                     <p className="text-xs text-stone-500">{item.purity}</p>
//                     <p className="text-sm font-semibold text-amber-900 mt-1">
//                       {formatINR(item.price * item.qty)}
//                     </p>

//                     <div className="flex items-center justify-between mt-2">
//                       <div className="inline-flex items-center border border-stone-300 rounded-md bg-white">
//                         <button
//                           onClick={() => onUpdateQty(item.id, item.qty - 1)}
//                           className="p-1 text-stone-600 hover:text-stone-900"
//                         >
//                           <Minus className="w-3 h-3" />
//                         </button>
//                         <span className="px-2.5 text-xs font-medium">{item.qty}</span>
//                         <button
//                           onClick={() => onUpdateQty(item.id, item.qty + 1)}
//                           className="p-1 text-stone-600 hover:text-stone-900"
//                         >
//                           <Plus className="w-3 h-3" />
//                         </button>
//                       </div>

//                       <button
//                         onClick={() => onRemove(item.id)}
//                         aria-label="Remove item"
//                         className="text-stone-400 hover:text-red-600 p-1"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Footer Summary & Checkout */}
//         {cart.length > 0 && !orderPlaced && (
//           <form onSubmit={handleCheckout} className="p-6 border-t border-stone-200 bg-stone-50 space-y-4">
//             <div className="space-y-1.5 text-sm">
//               <div className="flex justify-between text-stone-600">
//                 <span>Subtotal</span>
//                 <span>{formatINR(subtotal)}</span>
//               </div>
//               <div className="flex justify-between text-stone-600">
//                 <span>Jewellery GST (3%)</span>
//                 <span>{formatINR(gst)}</span>
//               </div>
//               <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
//                 <span>Total Payable</span>
//                 <span>{formatINR(grandTotal)}</span>
//               </div>
//             </div>

//             <input
//               type="text"
//               required
//               value={customerName}
//               onChange={(e) => setCustomerName(e.target.value)}
//               placeholder="Your full name for certificate & invoice"
//               className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
//             />

//             <button
//               type="submit"
//               className="w-full py-3 rounded-lg bg-stone-900 hover:bg-amber-800 text-white text-sm uppercase tracking-widest font-medium transition-colors"
//             >
//               Reserve &amp; Place Order
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { formatINR } from '../data/jewelleryData';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemove,
  onClearCart,
  onPlaceOrder,
  onViewOrders
}) {
  const [customerName, setCustomerName] = useState('');
  const [bookedOrder, setBookedOrder] = useState(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const gst = Math.round(subtotal * 0.03);
  const grandTotal = subtotal + gst;

  const handleCheckout = (e) => {
    e.preventDefault();
    const newOrder = {
      id: `AUR-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      customerName: customerName.trim(),
      items: cart,
      subtotal,
      gst,
      grandTotal,
      status: 'Confirmed'
    };

    onPlaceOrder(newOrder);
    onClearCart();
    setBookedOrder(newOrder);
    setCustomerName('');
  };

  const handleCloseDrawer = () => {
    setBookedOrder(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between">
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-800" />
            <h2 className="font-serif text-xl text-stone-900">Your Jewellery Bag</h2>
          </div>
          <button
            onClick={handleCloseDrawer}
            aria-label="Close shopping bag"
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {bookedOrder ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <CheckCircle2 className="w-14 h-14 text-emerald-600" />
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-amber-800">
                  Order ID: {bookedOrder.id}
                </p>
                <h3 className="font-serif text-2xl text-stone-900 mt-1">Order Booked</h3>
              </div>
              <p className="text-sm text-stone-600 max-w-xs">
                Thank you, {bookedOrder.customerName}. Your hallmarked pieces are reserved for insured dispatch.
              </p>
              <button
                onClick={() => {
                  setBookedOrder(null);
                  onClose();
                  onViewOrders();
                }}
                className="px-6 py-2.5 rounded-lg bg-stone-900 hover:bg-amber-800 text-white text-xs uppercase tracking-widest font-medium transition-colors"
              >
                View Booked Orders
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 py-12">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-3" />
              <p className="font-serif text-lg text-stone-800">Your bag is empty</p>
              <p className="text-xs mt-1">Explore our hallmarked gold and diamond pieces to begin.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3.5 p-3 rounded-xl border border-stone-200 bg-stone-50/50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-medium text-stone-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-500">{item.purity}</p>
                    <p className="text-sm font-semibold text-amber-900 mt-1">
                      {formatINR(item.price * item.qty)}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="inline-flex items-center border border-stone-300 rounded-md bg-white">
                        <button
                          onClick={() => onUpdateQty(item.id, item.qty - 1)}
                          className="p-1 text-stone-600 hover:text-stone-900"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-medium">{item.qty}</span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.qty + 1)}
                          className="p-1 text-stone-600 hover:text-stone-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemove(item.id)}
                        aria-label="Remove item"
                        className="text-stone-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && !bookedOrder && (
          <form onSubmit={handleCheckout} className="p-6 border-t border-stone-200 bg-stone-50 space-y-4">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Jewellery GST (3%)</span>
                <span>{formatINR(gst)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
                <span>Total Payable</span>
                <span>{formatINR(grandTotal)}</span>
              </div>
            </div>

            <input
              type="text"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Your full name for certificate & invoice"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-stone-900 hover:bg-amber-800 text-white text-sm uppercase tracking-widest font-medium transition-colors"
            >
              Reserve &amp; Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
}