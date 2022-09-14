<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all();
        return response()->json(['category'=>$category]);
        //return view ('/category/category')->with('categories', $category);
    }
   
    public function store(Request $request)
    {
        echo($request);
        $input = $request->except('_token');
        if(!empty($input) && !is_null($input['name'])){
            Category::create($input);
            return response()->json($input);
        }
        return response()->json(['error' => 'Preencha o nome da categoria'], 400);
    }
 
    public function show($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }

    public function update(Request $request, $id)
    {
        $input = $request->except('_token');
        if(!empty($input)){
            try{
                $category = Category::find($id);

                $category->name = $request["name"];
                $category->save();
                return response()->json(['success' => 'Categoria atualizada com sucesso']);
            } catch(e){

            }
        }
        return response()->json(['error' => 'Erro ao apagar categoria'], 400);
    }
   
    public function destroy($id)
    {
        if(!empty($id)){
            try{
                Category::destroy($id);
                return response()->json(['success'=>'Categoria apagada']);
            } catch (e){
                return response()->json(['error'=>'Essa categoria está sendo utilizada por algum contato'], 400);
            }
        }
        return response()->json(['error' => 'Erro ao apagar categoria'], 400);
    }
}