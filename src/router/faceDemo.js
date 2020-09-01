// face
const face = () => import('@/components/faceDemo/face.vue')
const ali = () => import('@/components/faceDemo/ali.vue')
const faceEase = () => import('@/components/faceDemo/faceEase.vue')

export default [
	/* face */
    {
      path: '/face',
      name: 'face',
      component: face,
    },
    {
      path: '/ali',
      name: 'ali',
      component: ali,
    },
   {
      path: '/faceEase',
      name: 'faceEase',
      component: faceEase,
    }]
   