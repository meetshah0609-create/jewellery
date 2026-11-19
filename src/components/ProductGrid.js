// import React, { useState } from 'react';
// import { Eye, Plus, ShieldCheck, Truck, Sparkles, X } from 'lucide-react';
// import { CATEGORIES, formatINR } from '../data/jewelleryData';

// export default function ProductGrid({
//   products,
//   selectedCategory,
//   setSelectedCategory,
//   onAddToCart
// }) {
//   const [quickViewItem, setQuickViewItem] = useState(null);

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="relative bg-stone-900 text-stone-100 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
//               2026 Bridal & Festive Edit
//             </p>
//             <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
//               Timeless Gold &amp; Certified Diamonds
//             </h1>
//             <p className="text-stone-300 text-base sm:text-lg max-w-lg leading-relaxed">
//               Heirloom-grade 22K BIS hallmarked gold and IGI-certified solitaire pieces crafted for milestones that last generations.
//             </p>
//             <div className="flex flex-wrap gap-4 pt-2">
//               <a
//                 href="#collection"
//                 className="px-7 py-3.5 bg-amber-700 hover:bg-amber-600 text-white text-sm uppercase tracking-widest font-medium transition-colors"
//               >
//                 Explore Collection
//               </a>
//               <button
//                 onClick={() => setSelectedCategory('Necklaces')}
//                 className="px-7 py-3.5 border border-stone-600 hover:border-amber-400 text-stone-200 text-sm uppercase tracking-widest transition-colors"
//               >
//                 Bridal Sets
//               </button>
//             </div>
//           </div>

//           <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
//             <img
//               src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80"
//               alt="Luxury Gold Jewellery"
//               onError={(e) => {
//                 e.currentTarget.src =
//                   'https://placehold.co/800x600/292524/fbbf24?text=Aurelia+Fine+Jewellery';
//               }}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Trust Strip */}
//       <section className="bg-amber-50/70 border-b border-amber-200/60">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-700">
//           <div className="flex items-center justify-center gap-2">
//             <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
//             <span>100% BIS Hallmarked Gold &amp; IGI Certified</span>
//           </div>
//           <div className="flex items-center justify-center gap-2">
//             <Truck className="w-4 h-4 text-amber-800 shrink-0" />
//             <span>Free Tamper-Proof Insured Delivery</span>
//           </div>
//           <div className="flex items-center justify-center gap-2">
//             <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
//             <span>Lifetime Exchange &amp; Buyback Guarantee</span>
//           </div>
//         </div>
//       </section>

//       {/* Catalog Section */}
//       <section id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
//           <div>
//             <h2 className="font-serif text-3xl text-stone-900">Curated Creations</h2>
//             <p className="text-stone-500 text-sm mt-1">
//               Showing {products.length} {products.length === 1 ? 'piece' : 'pieces'}
//             </p>
//           </div>

//           {/* Category Filter Pills */}
//           <div className="flex flex-wrap gap-2">
//             {CATEGORIES.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors ${
//                   selectedCategory === category
//                     ? 'bg-amber-800 text-white'
//                     : 'bg-white border border-stone-300 text-stone-700 hover:border-amber-700'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {products.length === 0 ? (
//           <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">
//             <p className="font-serif text-xl text-stone-800">No pieces matched your search</p>
//             <p className="text-stone-500 text-sm mt-1">
//               Try clearing your search filter or browsing another category.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
//             {products.map((item) => (
//               <article
//                 key={item.id}
//                 className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
//               >
//                 <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     onError={(e) => {
//                       e.currentTarget.src =
//                         'https://placehold.co/600x750/f5f5f4/78350f?text=Aurelia+Jewellery';
//                     }}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />

//                   {item.badge && (
//                     <span className="absolute top-3 left-3 px-2.5 py-1 bg-stone-900/85 text-amber-300 text-[10px] uppercase tracking-widest rounded">
//                       {item.badge}
//                     </span>
//                   )}

//                   <button
//                     onClick={() => setQuickViewItem(item)}
//                     aria-label={`Quick view ${item.name}`}
//                     className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/95 text-stone-800 shadow hover:bg-amber-800 hover:text-white transition-colors"
//                   >
//                     <Eye className="w-4 h-4" />
//                   </button>
//                 </div>

//                 <div className="p-4 flex-1 flex flex-col justify-between">
//                   <div>
//                     <p className="text-[11px] uppercase tracking-wider text-amber-800 font-medium">
//                       {item.purity}
//                     </p>
//                     <h3 className="font-serif text-lg text-stone-900 mt-1 line-clamp-1">
//                       {item.name}
//                     </h3>
//                     <p className="text-xs text-stone-500 mt-0.5">Net Wt: {item.weight}</p>
//                   </div>

//                   <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
//                     <span className="font-semibold text-stone-900">
//                       {formatINR(item.price)}
//                     </span>
//                     <button
//                       onClick={() => onAddToCart(item)}
//                       className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-amber-800 text-white text-xs font-medium transition-colors"
//                     >
//                       <Plus className="w-3.5 h-3.5" />
//                       Add to Bag
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Quick View Modal */}
//       {quickViewItem && (
//         <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl grid md:grid-cols-2 relative">
//             <button
//               onClick={() => setQuickViewItem(null)}
//               aria-label="Close modal"
//               className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-stone-700 hover:text-stone-950"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="aspect-square md:aspect-auto bg-stone-100">
//               <img
//                 src={quickViewItem.image}
//                 alt={quickViewItem.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
//               <div>
//                 <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
//                   {quickViewItem.category} • {quickViewItem.purity}
//                 </span>
//                 <h3 className="font-serif text-2xl text-stone-900 mt-2">
//                   {quickViewItem.name}
//                 </h3>
//                 <p className="text-xl font-semibold text-stone-900 mt-2">
//                   {formatINR(quickViewItem.price)}
//                 </p>
//                 <p className="text-sm text-stone-600 mt-4 leading-relaxed">
//                   {quickViewItem.description}
//                 </p>
//                 <div className="mt-4 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1">
//                   <p>
//                     <strong className="text-stone-800">Gross Weight:</strong> {quickViewItem.weight}
//                   </p>
//                   <p>
//                     <strong className="text-stone-800">Certification:</strong> BIS Hallmark &amp; Purity Card Included
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => {
//                   onAddToCart(quickViewItem);
//                   setQuickViewItem(null);
//                 }}
//                 className="w-full py-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white text-sm uppercase tracking-widest font-medium transition-colors"
//               >
//                 Add to Shopping Bag
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }
import React, { useState } from 'react';
import { Eye, Plus, ShieldCheck, Truck, Sparkles, X, Heart } from 'lucide-react';
import { CATEGORIES, formatINR } from '../data/jewelleryData';

export default function ProductGrid({
  products,
  selectedCategory,
  setSelectedCategory,
  onAddToCart,
  wishlist,
  onToggleWishlist
}) {
  const [quickViewItem, setQuickViewItem] = useState(null);

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
              2026 Bridal &amp; Festive Edit
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
              Timeless Gold &amp; Certified Diamonds
            </h1>
            <p className="text-stone-300 text-base sm:text-lg max-w-lg leading-relaxed">
              Heirloom-grade 22K BIS hallmarked gold and IGI-certified solitaire pieces crafted for milestones that last generations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#collection"
                className="px-7 py-3.5 bg-amber-700 hover:bg-amber-600 text-white text-sm uppercase tracking-widest font-medium transition-colors"
              >
                Explore Collection
              </a>
              <button
                onClick={() => setSelectedCategory('Necklaces')}
                className="px-7 py-3.5 border border-stone-600 hover:border-amber-400 text-stone-200 text-sm uppercase tracking-widest transition-colors"
              >
                Bridal Sets
              </button>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury Gold Jewellery"
              onError={(e) => {
                e.currentTarget.src =
                  'https://placehold.co/800x600/292524/fbbf24?text=Aurelia+Fine+Jewellery';
              }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-amber-50/70 border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-700">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
            <span>100% BIS Hallmarked Gold &amp; IGI Certified</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-amber-800 shrink-0" />
            <span>Free Tamper-Proof Insured Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
            <span>Lifetime Exchange &amp; Buyback Guarantee</span>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl text-stone-900">Curated Creations</h2>
            <p className="text-stone-500 text-sm mt-1">
              Showing {products.length} {products.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-800 text-white'
                    : 'bg-white border border-stone-300 text-stone-700 hover:border-amber-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">
            <p className="font-serif text-xl text-stone-800">No pieces matched your search</p>
            <p className="text-stone-500 text-sm mt-1">
              Try clearing your search filter or browsing another category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {products.map((item) => {
              const saved = isWishlisted(item.id);
              return (
                <article
                  key={item.id}
                  className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://placehold.co/600x750/f5f5f4/78350f?text=Aurelia+Jewellery';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {item.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-stone-900/85 text-amber-300 text-[10px] uppercase tracking-widest rounded">
                        {item.badge}
                      </span>
                    )}

                    {/* Wishlist Heart Toggle */}
                    <button
                      onClick={() => onToggleWishlist(item)}
                      aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/95 shadow hover:scale-105 transition-transform"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          saved ? 'fill-rose-600 text-rose-600' : 'text-stone-700'
                        }`}
                      />
                    </button>

                    <button
                      onClick={() => setQuickViewItem(item)}
                      aria-label={`Quick view ${item.name}`}
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/95 text-stone-800 shadow hover:bg-amber-800 hover:text-white transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-amber-800 font-medium">
                        {item.purity}
                      </p>
                      <h3 className="font-serif text-lg text-stone-900 mt-1 line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">Net Wt: {item.weight}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                      <span className="font-semibold text-stone-900">
                        {formatINR(item.price)}
                      </span>
                      <button
                        onClick={() => onAddToCart(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-amber-800 text-white text-xs font-medium transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Quick View Modal */}
      {quickViewItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl grid md:grid-cols-2 relative">
            <button
              onClick={() => setQuickViewItem(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-stone-700 hover:text-stone-950"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-square md:aspect-auto bg-stone-100">
              <img
                src={quickViewItem.image}
                alt={quickViewItem.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                  {quickViewItem.category} • {quickViewItem.purity}
                </span>
                <h3 className="font-serif text-2xl text-stone-900 mt-2">
                  {quickViewItem.name}
                </h3>
                <p className="text-xl font-semibold text-stone-900 mt-2">
                  {formatINR(quickViewItem.price)}
                </p>
                <p className="text-sm text-stone-600 mt-4 leading-relaxed">
                  {quickViewItem.description}
                </p>
                <div className="mt-4 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1">
                  <p>
                    <strong className="text-stone-800">Gross Weight:</strong> {quickViewItem.weight}
                  </p>
                  <p>
                    <strong className="text-stone-800">Certification:</strong> BIS Hallmark &amp; Purity Card Included
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5">
                <button
                  onClick={() => {
                    onAddToCart(quickViewItem);
                    setQuickViewItem(null);
                  }}
                  className="flex-1 py-3 rounded-lg bg-amber-800 hover:bg-amber-900 text-white text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Add to Bag
                </button>
                <button
                  onClick={() => onToggleWishlist(quickViewItem)}
                  aria-label="Toggle wishlist"
                  className="px-4 py-3 rounded-lg border border-stone-300 hover:border-rose-400 text-stone-700"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted(quickViewItem.id)
                        ? 'fill-rose-600 text-rose-600'
                        : 'text-stone-700'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}