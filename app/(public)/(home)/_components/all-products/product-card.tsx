import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}:any) => {
    return (
        <div
            key={product.id}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
          >
            {product.badge && (
              <div
                className={`absolute left-3 top-3 z-10 rounded px-2 py-1 text-xs font-bold text-white ${product.badgeColor}`}
              >
                {product.badge}
              </div>
            )}

            <div className="relative aspect-square overflow-hidden bg-gray-50 p-4">
              <div className="flex h-full items-center justify-center">
               <Image alt={product?.name} src={product?.image} height={220} width={300}/>
              </div>

              {/* Hover Actions */}
              <div className="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < product.rating
                        ? 'fill-orange-400 text-orange-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
                <span className="ml-1 text-xs text-gray-500">
                  ({product.reviews})
                </span>
              </div>

              <h3 className="mb-2 line-clamp-2 text-sm text-gray-900 hover:text-orange-500 cursor-pointer transition-colors">
                {product.name}
              </h3>

              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-blue-600">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
    );
};

export default ProductCard;