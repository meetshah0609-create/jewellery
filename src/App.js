// import React, { useState, useMemo } from 'react';
// import { jewelleryItems } from './data/jewelleryData';
// import Navbar from './components/Navbar';
// import ProductGrid from './components/ProductGrid';
// import CartDrawer from './components/CartDrawer';

// export default function App() {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const filteredProducts = useMemo(() => {
//     return jewelleryItems.filter((item) => {
//       const matchesCategory =
//         selectedCategory === 'All' || item.category === selectedCategory;
//       const matchesQuery =
//         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.purity.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesQuery;
//     });
//   }, [selectedCategory, searchQuery]);

//   const handleAddToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       }
//       return [...prev, { ...product, qty: 1 }];
//     });
//     setIsCartOpen(true);
//   };

//   const handleUpdateQty = (id, newQty) => {
//     if (newQty < 1) {
//       setCart((prev) => prev.filter((item) => item.id !== id));
//       return;
//     }
//     setCart((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
//     );
//   };

//   const handleRemoveItem = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

//   return (
//     <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
//       <Navbar
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//         cartCount={totalItems}
//         onOpenCart={() => setIsCartOpen(true)}
//       />

//       <div className="flex-1">
//         <ProductGrid
//           products={filteredProducts}
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//           onAddToCart={handleAddToCart}
//         />
//       </div>

//       <footer className="bg-stone-950 text-stone-400 text-xs py-8 border-t border-stone-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
//           <p className="font-serif text-sm tracking-widest text-stone-200">
//             AURELIA FINE JEWELLERS
//           </p>
//           <p>BIS Hallmarked 22K &amp; 18K Gold • Insured Nationwide Shipping</p>
//         </div>
//       </footer>

//       <CartDrawer
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cart={cart}
//         onUpdateQty={handleUpdateQty}
//         onRemove={handleRemoveItem}
//         onClearCart={() => setCart([])}
//       />
//     </div>
//   );
// }

import React, { useState, useMemo, useEffect } from 'react';
import { jewelleryItems } from './data/jewelleryData';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import WishlistOrdersDrawer from './components/WishlistOrdersDrawer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [drawerTab, setDrawerTab] = useState(null); // 'wishlist' | 'orders' | null

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('aurelia_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('aurelia_orders');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('aurelia_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('aurelia_orders', JSON.stringify(orders));
  }, [orders]);

  const filteredProducts = useMemo(() => {
    return jewelleryItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.purity.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty < 1) {
      setCart((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  const handleMoveWishlistToCart = (product) => {
    setDrawerTab(null);
    handleAddToCart(product);
  };

  const handlePlaceOrder = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartCount={totalItems}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setDrawerTab('wishlist')}
        ordersCount={orders.length}
        onOpenOrders={() => setDrawerTab('orders')}
      />

      <div className="flex-1">
        <ProductGrid
          products={filteredProducts}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />
      </div>

      <footer className="bg-stone-950 text-stone-400 text-xs py-8 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-serif text-sm tracking-widest text-stone-200">
            AURELIA FINE JEWELLERS
          </p>
          <p>BIS Hallmarked 22K &amp; 18K Gold • Insured Nationwide Shipping</p>
        </div>
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveItem}
        onClearCart={() => setCart([])}
        onPlaceOrder={handlePlaceOrder}
        onViewOrders={() => setDrawerTab('orders')}
      />

      <WishlistOrdersDrawer
        activeTab={drawerTab}
        onClose={() => setDrawerTab(null)}
        onSwitchTab={setDrawerTab}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onMoveToCart={handleMoveWishlistToCart}
        orders={orders}
      />
    </div>
  );
}