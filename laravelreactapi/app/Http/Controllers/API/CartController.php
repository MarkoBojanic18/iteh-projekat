<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Cart;



class CartController extends Controller
{
    public function addtocart(Request $request){
        if(auth('sanctum')->check()){

            $user_id = auth('sanctum')->user()->id;
            $product_id=$request->product_id;
            $product_qty=$request->product_qty;
            $product_days=$request->product_days;


            $productCheck = Product::where('id',$product_id)->first();
            if($productCheck)
            {
                if(Cart::where('product_id',$product_id)->where('user_id',$user_id)->exists()){
                    return response()->json([
                    'status'=>409,
                    'message'=> $productCheck->name.'Already added to cart',
                     ]);
                }
                else
                {
                    $cartitem = new Cart;
                    $cartitem->user_id = $user_id;
                    $cartitem->product_id = $product_id;
                    $cartitem->product_qty = $product_qty;
                    $cartitem->product_days = $product_days;
                    $cartitem->save();

                    return response()->json([
                'status'=>201,
                'message'=>'Added to cart',
                ]);
                }
                 
            }
            else
            {
                 return response()->json([
                'status'=>404,
                'message'=>'Car not found',
                 ]);
            }

           
        }
        else
        {
             return response()->json([
                'status'=>401,
                'message'=>'Login to add cars to cart',
            ]);
        }
    }
}
