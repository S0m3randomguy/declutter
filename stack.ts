interface ISprites {
    [key: string]: Sprite;
}

class Stack {
    sprites: ISprites;
    constructor(sprites?: ISprites) {
        this.sprites = sprites ? sprites : {};
    }

    contains(name: string): boolean {
        let keys = Object.keys(this.sprites);
        return keys.indexOf(name) !== -1;
    }

    get(name: string): Sprite {
        if (this.contains(name)) {
            return this.sprites[name];   
        }
        throw `Sprite stack error: Cannot find sprite with name '${name}'.`;
    }

    load(name: string, sprite: Sprite): void {
        this.sprites[name] = sprite;
    }

    offload(name: string): void {
        let sprite = this.get(name);
        sprite.destroy();
        delete this.sprites[name];
    }
}