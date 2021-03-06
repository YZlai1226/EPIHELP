import LiveChatComponent from './../components/chat/LiveChatComponent.js'
import AppLayout from './../components/Layouts/AppLayout'

const LiveChat = () => (
  <AppLayout
    header={
      <h2 className="font-semibold text-3xl text-white align-text-bottom leading-tight">
      Live Chat
      </h2>
    }>
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <LiveChatComponent />
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
)

export default LiveChat
