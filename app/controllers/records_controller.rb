class RecordsController < ApplicationController
  def index
    @records = Record.all


    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @records.to_json }
    end
  end

  def new 
    @record = Record.new       
  end

  def create
    @record = Record.new(record_params)
    @record.save

    redirect_to :action => :index 
  end

  def show
    @record = Record.find(params[:id])
    respond_to do |format|
      format.html { @page_title = @record.id} # show.html.erb
      format.json { render :json => @record.to_json }
    end
  end

  #def edit
   # @record = Record.find(params[:id])
    #render "_form"
  #end

  #def update
   # @record = Record.find(params[:id])
    #@record.update(record_params)

    #redirect_to record_url(@record)
  #end

  def destroy
    @record = Record.find(params[:id])
    @record.destroy

    redirect_to records_url
  end

  private

  def record_params
    params.require(:record).permit(:latitude, :longtitude, :device_id, :created_at) #, :record_image)
  end


end
