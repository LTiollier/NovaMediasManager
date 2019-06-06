<?php

namespace LTiollier\NovaMediasManager\App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use LTiollier\NovaMediasManager\App\Models\Folder;

/**
 * Class NovaMediasApiController
 *
 * @package LTiollier\NovaMediasManager\App\Http\Controllers
 */
class NovaMediasApiController extends Controller
{
    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse|mixed|\Symfony\Component\HttpFoundation\ParameterBag
     */
    public function show($id)
    {
        $folder = Folder::with('folders')->where('id', $id)->first();
        if (!$folder) {
            return request()->json([
                'errors' => [],
                'message' => 'Folder not found',
            ], 400);
        }
        return response()->json([
            'success' => true,
            'data' => $folder,
        ], 200);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $folder = new Folder;
        $folder->name = $request->input('name');
        $folder->folder_id = $request->input('folder');
        $folder->save();
        return response()->json([
            'success' => true,
            'data' => $folder,
        ], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        $folder = Folder::find($id);
        $folder->deleteChildrens();
        return response()->json([
            'success' => true,
            'message' => 'Folder deleted',
        ], 200);
    }

    /**
     * @return \Illuminate\Http\JsonResponse|mixed|\Symfony\Component\HttpFoundation\ParameterBag
     */
    public function root()
    {
        $root = Folder::with('folders')->where('id', 1)->first();
        if (!$root || !$root->isRoot()) {
            return request()->json([
                'errors' => [],
                'message' => 'Root folder not found',
            ], 400);
        }
        return response()->json([
            'success' => true,
            'data' => $root,
        ], 200);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return mixed|\Symfony\Component\HttpFoundation\ParameterBag
     */
    public function upload(Request $request)
    {
        $folderId = $request->input('folderId');
        $folder = Folder::find($folderId);
        foreach ($request->file('files') as $file) {
            $folder->addMedia($file)->toMediaCollection();
        }
        return response()->json([
            'success' => true,
            'message' => 'upload successfully',
        ], 200);
    }
}