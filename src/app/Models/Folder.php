<?php

namespace LTiollier\NovaMediasManager\App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class Folder extends Model implements HasMedia
{
    use HasMediaTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'folder_id'
    ];

    /**
     * @var array
     */
    protected $appends = [
        'medias', 'path_array'
    ];

    /**
     * @return mixed
     */
    public function folders()
    {
        return $this->hasMany('LTiollier\NovaMediasManager\App\Models\Folder');
    }

    /**
     * @return mixed
     */
    public function folder()
    {
        return $this->belongsTo('LTiollier\NovaMediasManager\App\Models\Folder');
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function getMediasAttribute() {
        $medias = $this->getMedia();
        $medias->each(function($media) {
            $media->full_url = $media->getFullUrl();
        });
        return $medias;
    }

    /**
     * @return array
     */
    public function getPathArrayAttribute() {
        $pathCollect = collect();
        $pathCollect->push([
            'name' => $this->isRoot() ? 'Home' : ucfirst($this->getAttribute('name')),
            'id' => $this->getAttribute('id')
        ]);
        $relationFolder = $this->folder;
        while ($relationFolder) {
            $pathCollect->prepend([
                'name' => $relationFolder->isRoot() ? 'Home' : ucfirst($relationFolder->getAttribute('name')),
                'id' => $relationFolder->getAttribute('id')
            ]);
            $relationFolder = $relationFolder->folder;
        }
        return $pathCollect->toArray();
    }

    /**
     * @return bool
     */
    public function isRoot()
    {
        return $this->getAttribute('id') === 1 && $this->getAttribute('name') === 'root';
    }

    /**
     * @throws \Exception
     */
    public function deleteChildrens()
    {
        $this->folders->each(function($folder) {
            $folder->deleteChildrens();
        });
        $this->delete();
    }
}