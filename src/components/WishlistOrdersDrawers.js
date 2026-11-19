import React from 'react';
import { X, Heart, Package, ShoppingBag, Trash2, CheckCircle2 } from 'lucide-react';
import { formatINR } from '../data/jewelleryData';

export default function WishlistOrdersDrawers({
  activeTab,
  onClose,
  onSwitchTab,
  wishlist,
  onToggleWishlist,
  onMoveToCart,
  orders
}) {
  if (!activeTab) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-6 pt-5 pb-3 border-b border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl text-stone-900">Saved &amp; Orders</h2>
            <button
              onClick={onClose}
              aria-label="Close drawer"
              className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-lg">
            <button
              onClick={() => onSwitchTab('wishlist')}
              className={`flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'wishlist'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-rose-600" />
              Wishlist ({wishlist.length})
            </button>
            <button
              onClick={() => onSwitchTab('orders')}
              className={`flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'orders'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Package className="w-3.5 h-3.5 text-amber-800" />
              Booked Orders ({orders.length})
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'wishlist' ? (
            wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 py-12">
                <Heart className="w-12 h-12 text-stone-300 mb-3" />
                <p className="font-serif text-lg text-stone-800">No saved pieces yet</p>
                <p className="text-xs mt-1 max-w-xs">
                  Tap the heart icon on any jewellery piece to save it here for later.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3.5 p-3 rounded-xl border border-stone-200 bg-stone-50/60"
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
                        {formatINR(item.price)}
                      </p>

                      <div className="flex items-center gap-2 mt-2.5">
                        <button
                          onClick={() => onMoveToCart(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-900 hover:bg-amber-800 text-white text-xs font-medium transition-colors"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Move to Bag
                        </button>
                        <button
                          onClick={() => onToggleWishlist(item)}
                          aria-label="Remove from wishlist"
                          className="p-1.5 text-stone-400 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : orders.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 py-12">
              <Package className="w-12 h-12 text-stone-300 mb-3" />
              <p className="font-serif text-lg text-stone-800">No booked orders yet</p>
              <p className="text-xs mt-1 max-w-xs">
                Once you reserve pieces from your shopping bag, your order receipt will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-stone-200 pb-2.5">
                    <div>
                      <span className="text-xs font-mono font-semibold text-amber-900">
                        {order.id}
                      </span>
                      <p className="text-[11px] text-stone-500 mt-0.5">{order.date}</p>
                      <p className="text-xs text-stone-700 mt-0.5">
                        Booked by <span className="font-medium">{order.customerName}</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      {order.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-xs">
                        <span className="text-stone-700 truncate pr-2">
                          {item.name} <span className="text-stone-400">× {item.qty}</span>
                        </span>
                        <span className="font-medium text-stone-900 shrink-0">
                          {formatINR(item.price * item.qty)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2.5 border-t border-stone-200 flex items-center justify-between text-xs">
                    <span className="text-stone-500">Total Paid (incl. 3% GST)</span>
                    <span className="text-sm font-bold text-stone-900">
                      {formatINR(order.grandTotal)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}