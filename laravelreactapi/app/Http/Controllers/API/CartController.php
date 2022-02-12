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





    public function viewcart(){
        if(auth('sanctum')->check())
        {
                $user_id = auth('sanctum')->user()->id;
                $cartitems = Cart::where('user_id',$user_id)->get();
                 return response()->json([
                'status'=>200,
                'cart'=>$cartitems,
            ]);
        }
        else
        {
            return response()->json([
                'status'=>401,
                'message'=>'Login to view cart data',
            ]);
        }
    }




    public function updatequantityanddays($cart_id,$scope){
        if(auth('sanctum')->check())
        {
              $user_id = auth('sanctum')->user()->id;
              $cartitem = Cart::where('id',$cart_id)->where('user_id',$user_id)->first();
              if($scope == 'incQ'){
                  $cartitem->product_qty+=1;
              }else if($scope == 'decQ'){
                   $cartitem->product_qty-=1;
              }
              else if($scope == 'incD'){
                   $cartitem->product_days+=1;
              }
              else if($scope == 'decD'){
                   $cartitem->product_days-=1;
              }

               $cartitem->update();
                 return response()->json([
                'status'=>200,
                'message'=>'Change in cart has been saved',
            ]);
        }
        else
        {
            return response()->json([
                'status'=>401,
                'message'=>'Login to continue',
            ]);
        }
        
    }


    public function deleteCartItem($cart_id){
         if(auth('sanctum')->check())
        {
            $user_id = auth('sanctum')->user()->id;
              $cartitem = Cart::where('id',$cart_id)->where('user_id',$user_id)->first();
              if($cartitem){
                    $cartitem->delete();

                    return response()->json([
                'status'=>200,
                'message'=>'Cart item removed successfully',
            ]);

              }
              else
              {
                   return response()->json([
                'status'=>404,
                'message'=>'Cart item not found',
            ]);
              }
         }
        else
        {
            return response()->json([
                'status'=>401,
                'message'=>'Login to continue',
            ]);
        }
    }
}
