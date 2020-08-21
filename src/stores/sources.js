export default {
    button: {
        default: `function Button(Object options)
options(
    String title,
    Array routes,
    Function hideModal,
    ?home: null,
    ?closeByBackground: true
)`,
    example: `<Button options={{ type: 'flat', state: 'active' }}>
    <p>See All</p>
</Button>

<Button options={{ type: 'icon', state: 'disabled' }}>
    <FontAwesomeIcon icon={faFire} />
</Button>`
},
    modal: {
        default: `function Modal(Object options)
options(
    Array routes,
    String, Function hideModal,
    ?title, ReactNode ?home,
    Boolean ?closeByBackground: true
)`,
    example: `<Button options={{
    type: 'active',
    handler: () => showModal([
        {
            path: '/',
            title: 'Welcome to AidReamer!',
            component: (jump) => <ArticleEdit jump={jump} />
        },
        {
            path: '/gallery',
            title: 'Step 1',
            component: (jump) => <ChooseImage jump={jump} />
        },
        {
            path: '/gallery/info',
            title: 'Step 2',
            component: () => <InfoImage />
        }
    ])
}}>
    <p>Modal with many depths</p>
</Button>

<Modal options={{
    routes: content,hideModal
}} />`
    }
}