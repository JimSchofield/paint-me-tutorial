<?php
/**
 * Plugin Name: Guty Paint
 * Description: A gutenberg block paint project
 * Version: 1.0.0
 * Author: Jim Schofield
 * Text Domain: guty-paint
 * Domain Path: /languages
 *
 * @package guty-paint
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function guty_paint_editor_scripts() {
    // Enqueue block editor JS
    wp_enqueue_script(
        'guty-paint/editor-scripts',
        plugins_url( '/assets/dist/build.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
        filemtime( plugin_dir_path( __FILE__ ) . '/assets/dist/build.js' ) 
    );
}

// Hook the enqueue functions into the editor
add_action( 'enqueue_block_editor_assets', 'guty_paint_editor_scripts' );


/**
 * Enqueue view scripts
 */
function guty_paint_plugin_view_scripts() {
    if ( is_admin() ) {
        return;
    }

    wp_enqueue_script(
		'guty-paint/view-scripts',
		plugins_url( '/assets/dist/build.view.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'react', 'react-dom' )
    );
}

add_action( 'enqueue_block_assets', 'guty_paint_plugin_view_scripts' );