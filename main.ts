
/**
 * Declutter your blocks workspace with a sprite Stack
 * that can be manipulated
 */
//% color=#4045db weight=0 icon="\uf056" block="Declutter"
namespace declutter {
    let stack = new Stack();

    //% block="load sprite $sprite with name $name"
    //% blockId=declutter_load_sprite
    //% sprite.shadow=spritescreate
    //% name.defl="name"
    //% weight=100
    /**
     * Add a sprite to the stack
     * @sprite Sprite to add to the Stack
     * @name Label for the sprite object
     */
    export function load(name: string, sprite: Sprite): void {
        stack.load(name, sprite);
    }

    //% block="get sprite with name $name"
    //% blockId=declutter_get_sprite
    //% name.defl="name"
    //% weight=90
    /**
     * Get a sprite from the stack by name
     * Throws error if sprite with matching name does not exist
     * @name Name of the sprite in the stack
    */
    export function get(name: string): Sprite {
        return stack.get(name);
    }

    //% block="offload sprite with name $name"
    //% blockId=declutter_offload_sprite
    //% name.defl="name"
    //% weight=80
    /**
     * Remove a sprite from the stack by name
     * Throws error if sprite with matching name does not exist
     * @name Name of the sprite in the stack
     */
    export function offload(name: string): void {
        stack.offload(name);
    }

    //% block="stack contains sprite with name $name"
    //% blockId=declutter_contains_sprite
    //% name.defl="name"
    //% weight=70
    /**
     * Returns true if a sprite with the name is found; false otherwise
     * @name Name of the sprite in the stack
     */
    export function contains(name: string): boolean {
        return stack.contains(name);
    }
}